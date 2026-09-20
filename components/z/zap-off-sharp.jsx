import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcvru_b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcvru_b9i"/>`,
		"fallback": "keyline-icons:zap-off-sharp",
	});
}

export default Component;
