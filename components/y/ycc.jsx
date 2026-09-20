import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs17gcz1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs17gcz1u"/>`,
		"fallback": "token:ycc",
	});
}

export default Component;
