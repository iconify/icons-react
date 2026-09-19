import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myuy8im6x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myuy8im6x"/>`,
		"fallback": "fa7-solid:wrench",
	});
}

export default Component;
