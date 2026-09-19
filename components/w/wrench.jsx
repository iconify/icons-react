import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zsn489tse.css';
import '../../css/m/myuiq3bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zsn489tse"/><path class="myuiq3bdf"/></g>`,
		"fallback": "heroicons-outline:wrench",
	});
}

export default Component;
