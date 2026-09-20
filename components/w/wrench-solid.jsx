import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcg52k0qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hcg52k0qz"/>`,
		"fallback": "streamline-sharp:wrench-solid",
	});
}

export default Component;
