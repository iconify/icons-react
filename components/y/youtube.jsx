import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf30xdl9z.css';
import '../../css/a/a78bxr7sa.css';
import '../../css/w/wiv5s7bjv.css';
import '../../css/k/kddbe-uhd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hf30xdl9z"/><path clip-rule="evenodd" class="a78bxr7sa"/><path class="wiv5s7bjv"/><path class="kddbe-uhd"/></g>`,
		"fallback": "streamline-flex-color:youtube",
	});
}

export default Component;
