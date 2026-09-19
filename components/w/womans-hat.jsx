import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjnvxcb_s.css';
import '../../css/w/w8xhtacrs.css';
import '../../css/v/vzls9jb1j.css';
import '../../css/h/hqij3abcu.css';
import '../../css/u/u109zkb2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjnvxcb_s"/><path class="w8xhtacrs"/><path class="vzls9jb1j"/><path class="hqij3abcu"/><path class="u109zkb2d"/></g>`,
		"fallback": "fluent-emoji-flat:womans-hat",
	});
}

export default Component;
