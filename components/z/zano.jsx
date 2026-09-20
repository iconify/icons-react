import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvftp6bcy.css';
import '../../css/i/i3i0qbcpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvftp6bcy"/><path class="i3i0qbcpx"/>`,
		"fallback": "token:zano",
	});
}

export default Component;
