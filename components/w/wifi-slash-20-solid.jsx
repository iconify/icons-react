import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5s15bc3d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5s15bc3d"/>`,
		"fallback": "sidekickicons:wifi-slash-20-solid",
	});
}

export default Component;
