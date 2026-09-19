import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xqvy6t8no.css';
import '../../css/g/ggbi9zoie.css';
import '../../css/l/lq980lbwa.css';
import '../../css/b/b3vm68htc.css';
import '../../css/a/a29nd2ndl.css';
import '../../css/a/ao666x43s.css';
import '../../css/c/c_-cwqb9c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xqvy6t8no"/><path clip-rule="evenodd" class="ggbi9zoie"/><path class="lq980lbwa"/><path class="b3vm68htc"/><path clip-rule="evenodd" class="a29nd2ndl"/><path class="ao666x43s"/><path class="c_-cwqb9c"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-vampire",
	});
}

export default Component;
