import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e96me-bvt.css';
import '../../css/p/p9gt7sb5i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="e96me-bvt"/><path class="p9gt7sb5i"/></g>`,
		"fallback": "icon-park:write",
	});
}

export default Component;
