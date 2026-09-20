import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/v/v6_hkbbrx.css';
import '../../css/d/dk84jbakp.css';
import '../../css/f/fez_u5bpc.css';
import '../../css/s/sg3z6rc4j.css';
import '../../css/r/r9gst35sp.css';
import '../../css/k/kfm7curke.css';
import '../../css/j/j96uhbcif.css';
import '../../css/n/n3yxckbfl.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="v6_hkbbrx"/><path class="dk84jbakp"/><path class="fez_u5bpc"/><path class="sg3z6rc4j"/></g><path clip-rule="evenodd" class="r9gst35sp"/><path clip-rule="evenodd" class="kfm7curke"/><path clip-rule="evenodd" class="j96uhbcif"/><path clip-rule="evenodd" class="n3yxckbfl"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:yuan-off",
	});
}

export default Component;
