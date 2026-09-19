import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeo1ixbek.css';
import '../../css/i/i5sc_mbua.css';
import '../../css/u/u-0vobhqw.css';
import '../../css/p/plhbj3bpm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oeo1ixbek"/><path class="i5sc_mbua"/><path class="u-0vobhqw"/><path class="plhbj3bpm"/></g>`,
		"fallback": "fluent-emoji-flat:wine-glass",
	});
}

export default Component;
