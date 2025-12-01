import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { Card, Typography, Descriptions, Badge } from "antd";
import DataContext from "./DataContext";
import { ThemeContext } from "./ThemeContext";

const { Title, Paragraph, Text } = Typography;

function Content() {
  const data = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);
  const { id } = useParams();
  const topic = id ? data.find((item) => item.id === parseInt(id)) : null;

  if (!id) {
    return (
      <div style={{ marginTop: "16px" }}>
        <Card>
          <Title level={3}>Главная страница</Title>
          <Paragraph>
            Выберите тему из меню слева для просмотра деталей.
          </Paragraph>
          <Link to="/topic/1">Перейти к Теме 1</Link>
        </Card>
      </div>
    );
  }

  if (!topic) {
    return <Paragraph>Тема не найдена.</Paragraph>;
  }

  return (
    <div style={{ marginTop: "16px" }}>
      <Card
        title={<Title level={2}>{topic.title}</Title>}
        style={{ maxWidth: "100%", overflow: "auto" }}
      >
        <Descriptions bordered column={1}>
          <Descriptions.Item label={<Text strong>Описания</Text>}>
            <Paragraph>{topic.description}</Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label={<Text strong>Пример кода</Text>}>
            <pre
              style={{
                backgroundColor: isDark ? "#333" : "#f5f5f5",
                padding: "16px",
                borderRadius: "4px",
                overflow: "auto",
                whiteSpace: "pre-wrap",
                color: isDark ? "#fff" : "#000",
              }}
            >
              {topic.codeExample}
            </pre>
          </Descriptions.Item>
          <Descriptions.Item
            label={<Text strong>подводные камни / важные моменты</Text>}
          >
            <Paragraph>{topic.pitfalls}</Paragraph>
          </Descriptions.Item>
          <Descriptions.Item
            label={<Text strong>ссылка на официальную документацию</Text>}
          >
            <Badge
              status="success"
              text={
                <a
                  href={topic.docsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: isDark ? "#fff" : "#000" }}
                >
                  Перейти к документации
                </a>
              }
            />
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

export default Content;
