import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0_nt9b-f.css';
import '../../css/s/sgotng7af.css';
import '../../css/t/ty2nnjbmu.css';
import '../../css/w/w92x9dbux.css';
import '../../css/g/gni2smbso.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e0_nt9b-f"/><path class="sgotng7af"/><path class="ty2nnjbmu"/><path class="w92x9dbux"/><path class="gni2smbso"/></g>`,
		"fallback": "fluent-emoji-flat:wind-chime",
	});
}

export default Component;
