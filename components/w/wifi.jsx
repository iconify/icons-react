import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl4koqbue.css';
import '../../css/s/s2rvhwwyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yl4koqbue"/><path class="s2rvhwwyk"/></g>`,
		"fallback": "mage:wifi",
	});
}

export default Component;
