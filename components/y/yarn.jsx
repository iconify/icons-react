import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/denkpb94f.css';
import '../../css/o/ouq9fewiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="denkpb94f"/><path class="ouq9fewiq"/>`,
		"fallback": "bxl:yarn",
	});
}

export default Component;
