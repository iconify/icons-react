import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yylsqbcwy.css';
import '../../css/s/s4d7hmlkb.css';
import '../../css/n/nrxfxbcyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yylsqbcwy"/><path class="s4d7hmlkb"/><path class="nrxfxbcyn"/></g>`,
		"fallback": "lucide:webhook",
	});
}

export default Component;
