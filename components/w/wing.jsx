import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e01dhyboj.css';
import '../../css/q/q86yn2b6b.css';
import '../../css/a/amsvotb-y.css';
import '../../css/y/yv031sbpe.css';
import '../../css/y/yz7hprb5c.css';
import '../../css/v/venn-2v8q.css';
import '../../css/p/pej5ifivp.css';
import '../../css/d/d1i0aghjc.css';
import '../../css/b/b9zxbfbzj.css';
import '../../css/h/hwl938b4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e01dhyboj"/><path class="q86yn2b6b"/><path class="amsvotb-y"/><path class="yv031sbpe"/><path class="yz7hprb5c"/><path class="venn-2v8q"/><path class="pej5ifivp"/><path class="d1i0aghjc"/><path clip-rule="evenodd" class="b9zxbfbzj"/><path class="hwl938b4s"/></g>`,
		"fallback": "fluent-emoji-flat:wing",
	});
}

export default Component;
