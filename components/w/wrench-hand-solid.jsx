import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghblb--5e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ghblb--5e"/>`,
		"fallback": "streamline-flex:wrench-hand-solid",
	});
}

export default Component;
