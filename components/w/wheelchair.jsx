import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8gd9bcgb.css';
import '../../css/e/ewb21wbfu.css';
import '../../css/b/b8pd5uezq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8gd9bcgb"/><circle class="ewb21wbfu"/><path class="b8pd5uezq"/>`,
		"fallback": "foundation:wheelchair",
	});
}

export default Component;
