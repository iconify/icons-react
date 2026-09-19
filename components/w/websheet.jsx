import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbfjszvql.css';
import '../../css/q/qstm5aclq.css';
import '../../css/u/u9olyabjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tbfjszvql"/><path class="qstm5aclq"/><path class="u9olyabjd"/>`,
		"fallback": "carbon:websheet",
	});
}

export default Component;
