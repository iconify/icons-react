import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzac1ibbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzac1ibbq"/>`,
		"fallback": "noviair:zap",
	});
}

export default Component;
