import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd5vktj5i.css';
import '../../css/d/db-mh32tp.css';
import '../../css/b/bo49sgb6x.css';
import '../../css/c/ckkd0kb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yd5vktj5i"/><path class="db-mh32tp"/><path clip-rule="evenodd" class="bo49sgb6x"/><path clip-rule="evenodd" class="ckkd0kb4l"/>`,
		"fallback": "solar:widget-add-outline",
	});
}

export default Component;
