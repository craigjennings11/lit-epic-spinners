import { html, LitElement } from '@polymer/lit-element';

export class IntersectingCirclesSpinner extends LitElement {
  static get is() { return 'intersecting-circles-spinner'; }

  static get properties() {
    return {
      animationDuration: Number,
      color: String,
      size: String,
    };
  }

  constructor() {
    super();

    this.animationDuration = 1.2;
    this.color = '#ff1d5e';
    this.size = '35px';
  }

  _render() {
    return html`
      <style>
        :host {
          display: block;
        }

        * {
          box-sizing: border-box;
        }

       .intersecting-circles-spinner {
          height: calc(${this.size} * 2);
          width: calc(${this.size} * 2);
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .intersecting-circles-spinner .spinnerBlock {
          animation: intersecting-circles-spinners-animation ${this.animationDuration}s linear infinite;
          transform-origin: center;
          display: block;
          height: ${this.size};
          width: ${this.size};
        }

        .intersecting-circles-spinner .circle {
          display: block;
          border: 2px solid ${this.color};
          border-radius: 50%;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }

        .intersecting-circles-spinner .circle:nth-child(1) {
          left: 0;
          top: 0;
        }

        .intersecting-circles-spinner .circle:nth-child(2) {
          left: calc(${this.size} * -0.36);
          top: calc(${this.size} * 0.2);
        }

        .intersecting-circles-spinner .circle:nth-child(3) {
          left: calc(${this.size} * -0.36);
          top: calc(${this.size} * -0.2);
        }

        .intersecting-circles-spinner .circle:nth-child(4) {
          left: 0;
          top: calc(${this.size} * -0.36);
        }

        .intersecting-circles-spinner .circle:nth-child(5) {
          left: calc(${this.size} * 0.36);
          top: calc(${this.size} * -0.2);
        }

        .intersecting-circles-spinner .circle:nth-child(6) {
          left: calc(${this.size} * 0.36);
          top: calc(${this.size} * 0.2);
        }

        .intersecting-circles-spinner .circle:nth-child(7) {
          left: 0;
          top: calc(${this.size} * 0.36);
        }

        @keyframes intersecting-circles-spinners-animation {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      </style>

      <div class="intersecting-circles-spinner">
        <div class="spinnerBlock">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
      </div>
    `;
  }
}

customElements.define(IntersectingCirclesSpinner.is, IntersectingCirclesSpinner);
