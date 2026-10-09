import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a29x5nygp.css';
import '../../css/y/yq9xkk4gp.css';
import '../../css/s/sd5zehitt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a29x5nygp"/><path class="yq9xkk4gp"/><path class="sd5zehitt"/>`,
		"fallback": "energy-icons:wind-sock-20-bold",
	});
}

export default Component;
