import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul_1wo81h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ul_1wo81h"/>`,
		"fallback": "streamline-plump:workspace-desk-remix",
	});
}

export default Component;
