import { html, LitElement } from '@polymer/lit-element';

export class ScalingSquaresSpinner extends LitElement {
  static get is() { return 'scaling-squares-spinner'; }

  static get properties() {
    return {
      animationDuration: Number,
      color: String,
      size: String,
    };
  }

  constructor() {
    super();

    this.animationDuration = 1.25;
    this.color = '#ff1d5e';
    this.size = '65px';
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

       .scaling-squares-spinner {
          align-items: center;
          animation: scaling-squares-animation ${this.animationDuration}s infinite;
          display: flex;
          flex-direction: row;
          height: ${this.size};
          justify-content: center;
          position: relative;
          transform: rotate(0deg);
          width: ${this.size};
        }

        .scaling-squares-spinner .square {
          animation-duration: ${this.animationDuration}s;
          animation-iteration-count: infinite;
          border: calc(${this.size} * 0.04 / 1.3) solid ${this.color};
          height: calc(${this.size} * 0.25 / 1.3);
          margin-left: auto;
          margin-right: auto;
          position: absolute;
          width: calc(${this.size} * 0.25 / 1.3);
        }

        .scaling-squares-spinner .square:nth-child(1) {
          animation-name: scaling-squares-spinner-animation-child-1;
        }

        .scaling-squares-spinner .square:nth-child(2) {
          animation-name: scaling-squares-spinner-animation-child-2;
        }

        .scaling-squares-spinner .square:nth-child(3) {
          animation-name: scaling-squares-spinner-animation-child-3;
        }

        .scaling-squares-spinner .square:nth-child(4) {
          animation-name: scaling-squares-spinner-animation-child-4;
        }

        @keyframes scaling-squares-animation {
          50%  { transform: rotate(90deg); }
          100% { transform: rotate(180deg); }
        }

        @keyframes scaling-squares-spinner-animation-child-1 {
          50% { transform: translate(150%,150%) scale(2,2); }
        }

        @keyframes scaling-squares-spinner-animation-child-2 {
          50% { transform: translate(-150%,150%) scale(2,2); }
        }

        @keyframes scaling-squares-spinner-animation-child-3 {
          50% { transform: translate(-150%,-150%) scale(2,2); }
        }

        @keyframes scaling-squares-spinner-animation-child-4 {
          50% { transform: translate(150%,-150%) scale(2,2); }
        }
      </style>

      <div class="scaling-squares-spinner">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    `;
  }
}

customElements.define(ScalingSquaresSpinner.is, ScalingSquaresSpinner);
