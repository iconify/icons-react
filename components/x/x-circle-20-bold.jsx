import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/g/g5zssfsfs.css';
import '../../css/w/wpshz3bjd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="g5zssfsfs"/><path class="wpshz3bjd"/>`,
		"fallback": "energy-icons:x-circle-20-bold",
	});
}

export default Component;
