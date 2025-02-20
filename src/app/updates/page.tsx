import { Button, Result } from 'antd'
import Link from 'next/link'

const UpdatePage = () => {
    return (
        <div
            style={{
                marginTop: '100px',
            }}
        >
            <Result
                status="404"
                title="404"
                subTitle="Sorry, Cooming soon!"
                extra={
                    <Button type="primary">
                        <Link href={'/'}>Back Home</Link>
                    </Button>
                }
            />
        </div>
    )
}

export default UpdatePage
