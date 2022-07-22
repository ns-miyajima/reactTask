export default function MyImage(props) {
    let fname = './' + props.fname; //画像はpublicフォルダの中。publicサーバ直下にあるように扱われる
    let size = props.size + "px";

    return (
        <img width={size} border="1"
            src={fname} />
    )
}