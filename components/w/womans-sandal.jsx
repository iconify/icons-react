import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ko2y0-bbf.css';
import '../../css/a/a7qjppb9s.css';
import '../../css/p/pmdg8_b3d.css';
import '../../css/v/vb8m2xbov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ko2y0-bbf"/><path class="a7qjppb9s"/><path class="pmdg8_b3d"/><path class="vb8m2xbov"/></g>`,
		"fallback": "fluent-emoji-flat:womans-sandal",
	});
}

export default Component;
