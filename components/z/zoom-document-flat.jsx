import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m8snobc9j.css';
import '../../css/w/wdco1lgtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m8snobc9j"/><path class="wdco1lgtd"/></g>`,
		"fallback": "streamline-sharp-color:zoom-document-flat",
	});
}

export default Component;
