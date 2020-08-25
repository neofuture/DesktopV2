import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../../../services/language.service';
import {environment} from '../../../../../../environments/environment';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video', {read: ElementRef, static: false}) video: ElementRef;
  @ViewChild('progress', {read: ElementRef, static: false}) progress: ElementRef;
  @ViewChild('canvas', {read: ElementRef, static: false}) canvas: ElementRef;
  @ViewChild('container', {read: ElementRef, static: false}) container: ElementRef;
  @ViewChild('playerControlsElement', {read: ElementRef, static: false}) playerControlsElement: ElementRef;
  @ViewChild('toolTip', {read: ElementRef, static: false}) toolTip: ElementRef;
  @ViewChild('toolTipImage', {read: ElementRef, static: false}) toolTipImage: ElementRef;

  videoHost = environment.videoHost;

  playButton = 'play';
  speaker = 'mute';
  muted = (localStorage.getItem('videoMuted') === 'true' ? true : false) || false;
  flexBasis = 0;
  mouse: boolean;
  volume = parseFloat(localStorage.getItem('videoVolume')) || 1;
  speed = 1;
  savedVolume = this.volume;
  position = 0;
  duration = 0;

  play = 'play';
  pause = 'pause';
  mute = 'mute';
  unMute = 'unMute';

  @Input() videoSrc: any;
  @Input() windowItem;
  paused = true;
  private language$: any;
  locale: any;
  playPause: any;
  muteUnmute: any;
  playerControls = false;
  playerControlsTime: any;
  pip = false;
  data: any;
  buffered: any;
  loaded = 0;
  loading = 0;
  private imageData: any;
  private time = 0;
  private pixels: any;
  currentMouseTime: string;
  seekingFlag = true;
  private firstClick = false;
  isFullScreen = false;
  displayToolTip = false;
  toolTipContent = '';
  toolTipLeft: any;
  toolTipTop: any;
  private transitionElement: any;
  toolTipImageContent: string;
  toolTipImageLeft: any;
  toolTipImageTop: any;
  thumbImage = false;


  constructor(
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    window.onkeydown = (event) => {
      if (this.windowItem.state.active) {
        if (event.code === 'Space') {
          this.togglePlay(null);
        }
        if (event.code === 'KeyM') {
          this.toggleMute(null);
          this.setShowControls(null);
        }
      }
    };
    this.language$ = this.languageService.language.subscribe(locale => {
      // @ts-ignore
      this.locale = locale.components.videoPlayer;
      this.playPause = this.locale.play;
      if (this.volume > 0) {
        this.muteUnmute = this.locale.mute;
      } else {
        this.muteUnmute = this.locale.unMute;
      }
    });
  }

  ngOnDestroy(): void {
    this.language$.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.video.nativeElement.requestPictureInPicture) {
        this.pip = true;
      }
      this.video.nativeElement.volume = this.volume;
      this.video.nativeElement.muted = this.muted;
      this.handleVolumeButton(null);
    });

    this.video.nativeElement.addEventListener('error', (event) => {
      console.log(event);
    }, true);
  }

  togglePlay(event): void {
    if (this.loaded !== 1) {
      return;
    }
    if (!this.firstClick) {
      this.firstClick = true;
      this.seekingFlag = true;
    }

    const method = this.video.nativeElement.paused ? 'play' : 'pause';
    const button = this.video.nativeElement.paused ? 'pause' : 'play';
    this.playPause = this.locale[button];
    this.video.nativeElement[method]();
    this.updateButton(event);
  }

  toggleMute(event): void {

    this.muted = !this.muted;
    this.video.nativeElement.muted = this.muted;
    localStorage.setItem('videoMuted', this.muted.toString());
    this.handleVolumeButton(event);
  }

  handleVolumeButton(event): void {
    this.speaker = this.muted ? this.unMute : this.mute;
  }

  updateButton(event): void {
    this.paused = this.video.nativeElement.paused;
    this.playButton = this.video.nativeElement.paused ? this.play : this.pause;
  }

  handleProgress(event): void {
    console.log('progress');
    this.position = this.video.nativeElement.currentTime;
    this.duration = this.video.nativeElement.duration;
    this.buffered = this.video.nativeElement.buffered;
    this.flexBasis = (this.position / this.duration) * 100;

    if (this.seekingFlag) {
      this.loading = 1;
    } else {
      this.loading = 0;
    }
    // let range = 0;
    // while (!(this.buffered.start(range) <= this.position && this.position <= this.buffered.end(range))) {
    //   range += 1;
    // }
    // const loadStartPercentage = this.buffered.start(range) / this.duration;
    // const loadEndPercentage = this.buffered.end(range) / this.duration;
    // const loadPercentage = loadEndPercentage - loadStartPercentage;
    // console.log(range, this.buffered.start(range), this.buffered.end(range), this.video.nativeElement.duration);
  }

  seeking(event: Event): void {
    this.seekingFlag = true;
    console.log('seeking', this.seekingFlag);
  }

  seeked(event: Event): void {
    this.seekingFlag = false;
    console.log('seeked', this.seekingFlag);
  }

  playing(event: Event): void {
    console.log('playing', this.seekingFlag);
  }

  loadedMetaData(event: Event): void {
    console.log('loaded meta data', this.seekingFlag);
  }

  scrub(event): void {
    const playing = !this.video.nativeElement.paused;
    if (playing) {
      this.video.nativeElement.pause();
    }
    this.video.nativeElement.currentTime = (event.offsetX / this.progress.nativeElement.offsetWidth) * this.video.nativeElement.duration;
    if (playing) {
      this.video.nativeElement.play();
    }
  }

  updatePos(event): void {
    const time = (event.offsetX / this.progress.nativeElement.offsetWidth) * this.video.nativeElement.duration;
    this.currentMouseTime = this.minutesSeconds(
      time
    );
    this.toolTipContent = this.currentMouseTime;
    this.toolTipImageContent = this.videoHost + this.videoSrc + '/thumbnails/240/135/' + Math.floor(time) + '.jpg';
  }

  mouseDown(event): void {
    this.mouse = true;
  }

  mouseUp(event): void {
    this.mouse = false;
  }

  mouseMove(event): void {
    this.setShowControls(event);
    if (this.mouse) {
      this.scrub(event);
    }
    this.updatePos(event);
    this.moveToolTip(event);
  }

  mouseOver(event: MouseEvent): void {
    this.showToolTip(event, true, null);
  }

  skip(event): void {
    this.video.nativeElement.currentTime += parseFloat(event.target.dataset.skip);
  }

  fullScreen(event): void {
    if (this.container.nativeElement.requestFullscreen) {
      this.container.nativeElement.requestFullscreen();
    } else if (this.container.nativeElement.mozRequestFullScreen) {
      this.container.nativeElement.mozRequestFullScreen();
    } else if (this.container.nativeElement.webkitRequestFullscreen) {
      this.container.nativeElement.webkitRequestFullscreen();
    } else if (this.container.nativeElement.msRequestFullscreen) {
      this.container.nativeElement.msRequestFullscreen();
    }
    this.isFullScreen = true;
  }

  cancelFullScreen(event): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else {
      // @ts-ignore
      if (document.mozCancelFullScreen) {
        // @ts-ignore
        document.mozCancelFullScreen();
        // @ts-ignore
      } else if (document.webkitExitFullscreen) {
        // @ts-ignore
        document.webkitExitFullscreen();
        // @ts-ignore
      } else if (document.msExitFullscreen) {
        // @ts-ignore
        document.msExitFullscreen();
      }
    }
    this.isFullScreen = false;
  }

  handleRangeUpdate(event): void {
    this.volume = event.target.value;
    localStorage.setItem('videoVolume', this.volume.toString());
    this.video.nativeElement[event.target.name] = this.volume;
    this.savedVolume = this.volume;
    this.handleVolumeButton(event);
    this.toolTipContent = this.locale.volume + ' - ' + Math.round(this.volume * 10);
  }

  minutesSeconds(value): any {
    const minutes: number = Math.floor(value / 60);
    return Math.floor(minutes) + ':' + Math.floor(value - minutes * 60).toString().padStart(2, '0');
  }

  setShowControls(event): void {
    clearTimeout(this.playerControlsTime);
    this.playerControls = true;
    this.playerControlsTime = setTimeout(() => {
      this.setHideControls(event);
      this.hideToolTip(event);
    }, 4000);
  }

  setHideControls(event): void {
    setTimeout(() => {
      this.playerControls = false;
      clearTimeout(this.playerControlsTime);
    }, 500);
  }

  block(): any {
    return false;
  }

  pictureInPicture(event: MouseEvent): void {
    this.video.nativeElement.requestPictureInPicture();
  }

  setSpeed(value): void {
    this.speed = value;
    this.video.nativeElement.playbackRate = value;
  }

  error(event): void {
    if (event.type === 'error') {
      this.loaded = -1;
      this.brokenScreen();
    }
  }

  loadSuccess(event: Event): void {
    console.log('loaded data', this.seekingFlag);
    if (event.type === 'loadeddata') {
      this.loaded = 1;
    }
    this.seekingFlag = false;
  }

  brokenScreen(): void {
    this.canvas.nativeElement.width = this.container.nativeElement.offsetWidth;
    this.canvas.nativeElement.height = this.container.nativeElement.offsetHeight;

    const ctx = this.canvas.nativeElement.getContext('2d', {alpha: false});       // context without alpha channel.
    this.imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height); // create image data
    this.pixels = this.imageData.data;

    setInterval(() => {
      this.noise(ctx);
    }, 30);

  }

  noise(ctx): void {
    const dark = this.generateRandomNumber(8.8, 9);
    const size = this.generateRandomNumber(89000, 100000);
    const roll = this.generateRandomNumber(0.2, 0.32);

    for (let i = 0, n = this.pixels.length; i < n; i += 4) {
      // @ts-ignore
      const c = dark + Math.sin(i / size + this.time / 2);
      this.pixels[i] = this.pixels[i + 1] = this.pixels[i + 2] = 25 * Math.random() * c;
      this.pixels[i + 3] = 255;
    }

    ctx.putImageData(this.imageData, 0, 0);
    // @ts-ignore
    this.time = (this.time + roll) % this.canvas.nativeElement.height;
    // @ts-ignore
    this.time -= this.generateRandomNumber(0, 0.4);
  }

  generateRandomNumber(min, max): void {
    return Math.random() * (max - min) + min;
  }

  waiting(event: Event): void {
    console.log('waiting');
    this.seekingFlag = true;
  }

  stalled(event: Event): void {
    console.log('stalled');
  }

  loadStart(event: Event): void {
    console.log('load start');
  }

  canPlayThrough(event: Event): void {
    this.seekingFlag = false;
    this.firstClick = true;
    console.log('can play through');
  }

  restartVideo(event: MouseEvent): void {
    this.scrub(0);
    this.video.nativeElement.play();
  }

  openSettings(event: MouseEvent): void {
    console.log('open settings');
  }

  moveToolTip(event): void {
    const el = event.target;
    const offset = this.getOffset(el);
    this.transitionElement = el;
    this.toolTipLeft = (event.offsetX - (this.toolTip.nativeElement.offsetWidth / 2)) + 'px';
    this.toolTipTop = (offset.top - 32) + 'px';

    this.toolTipImageLeft = (event.offsetX - 65) + 'px';
    this.toolTipImageTop = (offset.top - 32) - 61 + 'px';
  }

  showToolTip(event, floating = false, text): void {
    this.toolTipContent = text;
    this.displayToolTip = true;

    if (floating) {
      this.thumbImage = true;
    } else {
      this.thumbImage = false;
    }

    setTimeout(() => {
      const offset = this.getOffset(event.target);
      let left = (offset.left - ((this.toolTip.nativeElement.offsetWidth) / 2) + (event.target.offsetWidth / 2));

      if (left < 2) {
        left = 2;
      }
      if (
        (left + this.toolTip.nativeElement.offsetWidth) > this.container.nativeElement.offsetWidth
      ) {
        left = this.container.nativeElement.offsetWidth - this.toolTip.nativeElement.offsetWidth - 2;
      }

      this.toolTipLeft = left + 'px';
      this.toolTipTop = (offset.top - 32) + 'px';

      // this.toolTipImageLeft = (left - 65) + 'px';
      // this.toolTipImageTop = (offset.top - 32) - 65 + 'px';
    });

  }

  hideToolTip(event): void {
    this.displayToolTip = false;
    this.thumbImage = false;
  }

  getOffset(el): any {
    const bodyRect = this.container.nativeElement.getBoundingClientRect();
    const elemRect = el.getBoundingClientRect();
    const offsetTop = elemRect.top - bodyRect.top;
    const offsetLeft = elemRect.left - bodyRect.left;
    return {left: offsetLeft, top: offsetTop};
  }

}
