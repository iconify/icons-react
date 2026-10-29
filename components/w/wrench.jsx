import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo_9irb0d.css';
import '../../css/l/l6wodwbos.css';
import '../../css/s/siajtsbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo_9irb0d"/><path class="l6wodwbos"/><path class="siajtsbeo"/>`,
		"fallback": "withicons-bauhaus:wrench",
	});
}

export default Component;
