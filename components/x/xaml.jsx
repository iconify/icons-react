import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/exab9tbzj.css';
import '../../css/h/hjc01wbek.css';
import '../../css/t/tewf8ur7b.css';
import '../../css/j/j6h5u6bas.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="exab9tbzj"/><path class="hjc01wbek"/><path class="tewf8ur7b"/><path class="j6h5u6bas"/></g>`,
		"fallback": "catppuccin:xaml",
	});
}

export default Component;
