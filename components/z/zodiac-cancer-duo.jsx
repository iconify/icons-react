import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt8tgqbxx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xf0e2vbwp.css';
import '../../css/z/znm-30slm.css';
import '../../css/a/ao6arwbio.css';
import '../../css/j/ja4lbtblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt8tgqbxx secondary"/><g class="dt0cm9dhy primary"><path class="xf0e2vbwp"/><path class="znm-30slm"/><path class="ao6arwbio"/><path class="ja4lbtblf"/></g>`,
		"fallback": "iconaut:zodiac-cancer-duo",
	});
}

export default Component;
