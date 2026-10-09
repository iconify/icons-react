import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-3px956v.css';
import '../../css/x/x5abyccpj.css';
import '../../css/z/z05xz87_i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-3px956v"/><path class="x5abyccpj"/><path class="z05xz87_i"/>`,
		"fallback": "energy-icons:wifi-20",
	});
}

export default Component;
