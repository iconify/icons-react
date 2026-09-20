import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz32jjbma.css';
import '../../css/m/mg-i62fru.css';
import '../../css/r/rzyax-b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz32jjbma"/><path class="mg-i62fru"/><path class="rzyax-b9u"/>`,
		"fallback": "uim:web-section",
	});
}

export default Component;
