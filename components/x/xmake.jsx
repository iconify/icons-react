import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/i7is_ifym.css';
import '../../css/v/vkkts6n9q.css';
import '../../css/v/vgkh8tqot.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="i7is_ifym"/><path class="vkkts6n9q"/><path class="vgkh8tqot"/></g>`,
		"fallback": "catppuccin:xmake",
	});
}

export default Component;
