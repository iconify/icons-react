import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srgi2oukb.css';
import '../../css/e/e017mbc7v.css';
import '../../css/w/wjaacdb4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="srgi2oukb"/><path class="e017mbc7v"/><path clip-rule="evenodd" class="wjaacdb4g"/></g>`,
		"fallback": "streamline-plump-color:wheat-flat",
	});
}

export default Component;
