import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk0ivzbcg.css';
import '../../css/x/x22kdubov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk0ivzbcg"/><path class="x22kdubov"/>`,
		"fallback": "carbon:white-paper",
	});
}

export default Component;
