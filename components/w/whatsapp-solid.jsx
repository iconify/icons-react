import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxpwkkx4b.css';
import '../../css/c/cxrhsobiq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxpwkkx4b"/><path clip-rule="evenodd" class="cxrhsobiq"/>`,
		"fallback": "teenyicons:whatsapp-solid",
	});
}

export default Component;
