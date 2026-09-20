import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o26vtib_z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o26vtib_z"/>`,
		"fallback": "streamline:wind-flow-2-remix",
	});
}

export default Component;
