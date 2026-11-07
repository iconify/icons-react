import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/out_eubyp.css';
import '../../css/w/wh1vxda8i.css';
import '../../css/u/u4zxjwj4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="out_eubyp"/><path class="wh1vxda8i"/><path class="u4zxjwj4f"/>`,
		"fallback": "solar:xxx-bold",
	});
}

export default Component;
