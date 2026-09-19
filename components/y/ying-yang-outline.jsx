import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n0wjplb3e.css';
import '../../css/q/qabc2yclt.css';
import '../../css/c/cnnvx2bys.css';
import '../../css/z/z2caz5u3u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n0wjplb3e"/><path class="qabc2yclt"/><path class="cnnvx2bys"/><path class="z2caz5u3u"/></g>`,
		"fallback": "glyphs:ying-yang-outline",
	});
}

export default Component;
