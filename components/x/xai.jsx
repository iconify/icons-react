import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_d6vc2qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_d6vc2qy"/>`,
		"fallback": "thesvg-color:xai",
	});
}

export default Component;
