import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c1powqbyf.css';
import '../../css/y/yepmwko9k.css';
import '../../css/f/fzqf2pbyc.css';
import '../../css/n/n2jrplbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c1powqbyf"/><path class="yepmwko9k"/><path class="fzqf2pbyc"/><path class="n2jrplbtn"/></g>`,
		"fallback": "keyline-icons:wifi-exclamation-duotone",
	});
}

export default Component;
