import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw-cofgvd.css';
import '../../css/t/tngwchp1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw-cofgvd"/><path class="tngwchp1h"/>`,
		"fallback": "boxicons:yin-yang-filled",
	});
}

export default Component;
