import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lknj651ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lknj651ur"/>`,
		"fallback": "keyline-icons:zap-sharp",
	});
}

export default Component;
