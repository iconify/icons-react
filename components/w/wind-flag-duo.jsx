import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8jfmzhjz.css';
import '../../css/k/kgwv7k-oi.css';
import '../../css/e/exts4cbck.css';
import '../../css/f/f410vmb0w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8jfmzhjz"/><path class="kgwv7k-oi"/><path clip-rule="evenodd" class="exts4cbck"/><path class="f410vmb0w"/></g>`,
		"fallback": "streamline-kameleon-color:wind-flag-duo",
	});
}

export default Component;
