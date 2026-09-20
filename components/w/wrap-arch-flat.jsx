import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sttywbbwp.css';
import '../../css/s/swtudrrzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sttywbbwp"/><path class="swtudrrzd"/></g>`,
		"fallback": "streamline-sharp-color:wrap-arch-flat",
	});
}

export default Component;
