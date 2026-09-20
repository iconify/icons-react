import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7273vwtk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c7273vwtk"/>`,
		"fallback": "streamline-plump:workspace-desk-solid",
	});
}

export default Component;
